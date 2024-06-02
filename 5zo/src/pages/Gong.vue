<template>
  <div class="container d-flex justify-content-center align-items-center vh-90">
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <div class="card">
          <img
            src="data:image/png;base64,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"
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
                  <td>공연정</td>
                </tr>
                <tr>
                  <th scope="row">생년월일</th>
                  <td>2000년 03월 17일</td>
                </tr>
                <tr>
                  <th scope="row">이메일</th>
                  <td>yeong41@naver.com</td>
                </tr>
                <tr>
                  <th scope="row">연락처</th>
                  <td>010-2184-4287</td>
                </tr>
                <tr>
                  <th scope="row">지역</th>
                  <td>마포구</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img
            src="https://pbs.twimg.com/media/GML4aTIbMAAO9iz?format=jpg&name=medium"
            class="card-img-top"
            alt="MBTI Image"
          />
          <div class="card-body" style="text-align: center">
            <!-- 가운데 정렬 스타일 추가 -->
            <h5 class="card-title">MBTI</h5>
            <p class="card-text">제 MBTI는 ISFJ입니다 ^^</p>
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
