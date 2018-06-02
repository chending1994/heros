<template>
    <div>
        <h2 class="sub-header">Edit Hero</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" value="xxx" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <input type="text" class="form-control" id="gender" value="xxx" v-model="formData.gender">
          </div>
          <button type="submit" class="btn btn-success" @click.prevent="handleEdit()">Submit</button>
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
      },
      id: -1
    };
  },
  created() {
    //获取当前路由的id
    this.id = this.$route.params.id;
    //获取当前信息的数据
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http
        .get(`http://localhost:3000/heroes/${this.id}`)
        .then(res => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit() {
      axios
        .patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then(res => {
          this.$router.push({
            name: "heroes"
          });
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
