const app = Vue.creatApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },

  methods: {
    attackMaster() {
      const attackValue = Math.random(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = Math.random(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#game");
