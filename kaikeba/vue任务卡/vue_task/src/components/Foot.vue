<template>
  <div class="footer">
        <div class="links">
          <a href="#">帮助</a>
          <a href="#">隐私</a>
          <a href="#">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2020 时光@
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
      .footer {
        position: absolute;
        width: 95%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
</style>