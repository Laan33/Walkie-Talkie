<template>
  <button type="button" @click="deleteComment()" class="btn btn-primary">Delete Comment</button>
</template>

<script>
import { getFunctions, httpsCallable } from 'firebase/functions';
export default {
  name: 'DeleteComment',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteComment() {
      const functions = getFunctions(app);
      const deleteComment = httpsCallable(functions, 'deletecomment?id=' + this.id);
      deleteComment().then((result) => {
        if (result.data == "Document successfully deleted") {
          this.$emit('comment-deleted');
        }
      });
    }
  }
}
</script>