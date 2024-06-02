<template>
  <div class="container d-flex justify-content-center align-items-center vh-70">
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <div class="card">
          <img
            src="https://i.namu.wiki/i/7saHRlH_KjVEOEMwky9mR_mTpdz-u1GUy7jRuwDFmS2kEVJTfoMEOy7X-ciLCrzOqGXdu-TlgaJO_TVMOgXHLg.webp"
            class="card-img-top"
            alt="Profile Picture"
          />
          <div class="card-body align-items-center" style="text-align: center">
            <!-- 가운데 정렬 스타일 추가 -->
            <h5 class="card-title">소개</h5>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">이름</th>
                  <td>최현수</td>
                </tr>
                <tr>
                  <th scope="row">생년월일</th>
                  <td>1998년 03월 15일</td>
                </tr>
                <tr>
                  <th scope="row">이메일</th>
                  <td>gustn96143@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">연락처</th>
                  <td>010-2627-9614</td>
                </tr>
                <tr>
                  <th scope="row">지역</th>
                  <td>범계</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img
            src="https://pbs.twimg.com/media/GMPrIEsawAA4yIs.jpg"
            class="card-img-top"
            alt="MBTI Image"
          />
          <div class="card-body" style="text-align: center">
            <!-- 가운데 정렬 스타일 추가 -->
            <h5 class="card-title">MBTI</h5>
            <p class="card-text">제 MBTI는 ENFJ입니다 ^^</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style>
html,
body {
  height: 100%;
  margin: 0;
}
.container {
  width: 100%;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card {
  margin: 20px;
}
</style>
