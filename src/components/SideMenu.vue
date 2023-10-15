<template>
  <div id="sideMenu">
    <div id="sideMenuHeader">SideMenu</div>
    <div id="sideMenuListArea">
      <div class="sideMenuItem">테스트메뉴1</div>
      <div class="sideMenuItem">테스트메뉴2</div>
      <div class="sideMenuItem">테스트메뉴3</div>
      <div class="sideMenuItem">테스트메뉴4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
}
</script>


<style>
#sideMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 200px;

  /* 테스트 확인용 속성 */
  //background: indianred;
}
#sideMenuHeader {
  font-size: 25px;
  margin: 30px 10px 10px 10px;
  height: 5%;
}
#sideMenuListArea {
  display: flex;
  flex-direction: column;

  height: 80%;
  margin: 10px 10px 20px 10px;
  padding: 20px;
  border-radius: 20px;

  /* 테스트 확인용 속성 */
  background: burlywood;
}
.sideMenuItem {
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  background: #228bec;
  color: whitesmoke;
}
</style>