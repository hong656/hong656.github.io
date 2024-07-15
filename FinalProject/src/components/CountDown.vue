<template>
  <div class="countdown">
    <div class="num">
      <p :id="'days' + id">{{ days }}</p>
      <span>Days</span>
    </div>
    <div class="num">
      <p :id="'hours' + id">{{ hours }}</p>
      <span>Hours</span>
    </div>
    <div class="num">
      <p :id="'minutes' + id">{{ minutes }}</p>
      <span>Minutes</span>
    </div>
    <div class="num">
      <p :id="'seconds' + id">{{ seconds }}</p>
      <span>Seconds</span>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  margin-top: 20px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.countdown .num {
  width: 65px;
  height: 65px;
  background-color: white;
}

.num p {
  color: black;
  font-size: 35px;
  height: 25px;
}

.num span {
  font-size: 15px;
}
</style>

<script>
export default {
  props: ['id'],
  data() {
    return {
      countDownDate: new Date('August 10, 2024 00:00:00').getTime(),
      isFinished: false,
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;

        if (distance > 0) {
          this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
          this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        } else {
          this.isFinished = true;
          clearInterval(this.intervalId); // Stop the timer when countdown reaches 0
          this.days = '00';
          this.hours = '00';
          this.minutes = '00';
          this.seconds = '00';
          // You can optionally display a message here, e.g., "Countdown finished!"
        }
      }, 1000);
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId); // Clean up the interval before destroying the component
  },
};
</script>

