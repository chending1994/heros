<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" placeholder="请输入姓名" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <input type="text" class="form-control" id="gender" placeholder="请输入性别" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http
        .post("/heroes", this.formData)
        .then(res => {
          if (res.status === 201) {
            console.log(res);
            this.$router.push({
              name: "heroes"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
