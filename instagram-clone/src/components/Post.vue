<template>
  <div>
    <div id="post-form" v-for="user in users" :key="user.userId">
      <User
        :profileImg="user.profileImg"
        :profileName="user.profileName"
        @profileHandler="goToProfile"
      ></User>

      <img :src="user.photo" />

      <div id="status">
        <Reaction
          :index="user.userId"
          :isSaved="user.isSaved"
          @likeHandler="addYou"
          @unlikeHandler="removeYou"
        ></Reaction>

        <Likes :likes="user.likes"></Likes>

        <Caption :caption="user.caption" :name="user.profileName"></Caption>

        <Comment :comments="user.comments"></Comment>

        <div>11 hours ago</div>
      </div>

      <AddComment
        :index="user.userId"
        @addCommentHandler="addComment"
      ></AddComment>
    </div>
  </div>
</template>

<script>
import User from "./User.vue";
import Reaction from "./Reaction.vue";
import Caption from "./Caption.vue";
import AddComment from "./AddComment.vue";
import Comment from "./Comment.vue";
import Likes from "./Likes.vue";

export default {
  components: {
    User,
    Reaction,
    Likes,
    Caption,
    Comment,
    AddComment,
  },
  data() {
    return {
      users: [
        {
          userId: 1,
          profileImg: "https://wwwii.bsthun.com/folder/ta/ann_profile.jpg",
          profileName: "annmtr_",
          photo: "https://wwwii.bsthun.com/folder/ta/ann_photo1.jpg",
          caption:
            "No, I'm not perfect, but I hope you see my worth — 🌙\ncr. ท่านพ่อ 📸",
          comments: [],
          likes: ["annmtr_", "cympati", "bsthun_"],
          isSaved: false,
        },
        {
          userId: 2,
          profileImg: "https://wwwii.bsthun.com/folder/ta/cream_profile.jpg",
          profileName: "cympati",
          photo: "https://wwwii.bsthun.com/folder/ta/cream_photo1.jpg",
          caption: "🧣🌲🛖🪟: ✿ )",
          comments: [],
          likes: ["cympati"],
          isSaved: false,
        },
        {
          userId: 3,
          profileImg: "https://wwwii.bsthun.com/folder/ta/thun_profile.jpg",
          profileName: "bsthun_",
          photo: "https://wwwii.bsthun.com/folder/ta/thun_photo1.jpg",
          caption: "My #Android 😉",
          comments: [],
          likes: [],
          isSaved: false,
        },
      ],
    };
  },
  methods: {
    addComment(data) {
      const targetUser = this.users.find((e) => e.userId == data.userId);
      console.log(targetUser);
      targetUser.comments.push(data.value);
    },
    addYou(index) {
      const targetUser = this.users.find((e) => e.userId == index);
      targetUser.likes.splice(0, 0, "you");
    },
    removeYou(index) {
      const targetUser = this.users.find((e) => e.userId == index);
      targetUser.likes.splice(0, 1);
    },
    goToProfile(name) {
      const targetUser = this.users.find((e) => e.profileName == name);
      this.$router.push({
        name: "profile",
        params: { user: targetUser, userName: targetUser.profileName },
      });
    },
  },
};
</script>

<style scoped>
#post-form {
  display: flex;
  flex-direction: column;

  max-width: 35rem;
  margin: 4rem auto;

  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgb(199, 199, 199);
}

#post-form > img {
  width: 100%;
}

#status {
  font-family: "Noto Sans JP", sans-serif;

  padding: 0.2rem 1rem;
  font-size: 0.77rem;
}

#status div:nth-child(2) {
  margin-bottom: 0.25rem;
}

#status div:nth-child(5) {
  color: rgba(128, 128, 128, 0.815);
  font-size: 0.65rem;
  margin-top: 0.3rem;
}
</style>