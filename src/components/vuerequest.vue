<template>
    <div>
      请求页面
    </div>
</template>

<script>
    export default {
        name: "vuerequest",
      created(){
          //fetch
          // fetch("/apis/test/testToken.php",{
          //   method:"post",
          //   headers:{
          //     token:"f4c902c9ae5a2a9d8f8486ad064e706"
          //   },
          //   body:JSON.stringify({username:"henry",password:"321321"})
          // })
          //   .then(result=>{
          //     //console.log(result)
          //     return result.json()
          //   })
          //   .then(data=>{
          //     console.log(data)
          //   })

        //axios
        this.$axios.post("/apis/test/testToken.php",{username:"hello",password:"321321"})
          .then(data=>{
            console.log(data)
          })
      }
    }
</script>

<style scoped>

</style>
