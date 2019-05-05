new Vue({
    el: '#app',
    data: {
        YouBar: 100,
        MonsterBar: 100,
        NewGame: true,
        attacks: [],
    },
    methods: {
        StartNewGame: function() {
            this.YouBar = 100;
            this.MonsterBar = 100;
            this.NewGame = false;
            this.attacks = [];
        },
        MonsterAttack: function() {
            var M = Math.floor(Math.random() * 6) + 5;
            text = "MONSTER HITS PLAYER FOR " + M
            this.attacks.push(text);
            console.log(this.attacks.length);
            return M;
        },
        PlayerAttack: function() {
            var P = Math.floor(Math.random() * 6) + 5;
            text = "PLAYER HITS MONSTER FOR " + P
            this.attacks.push(text);
            var M = this.MonsterAttack();
            if (this.YouBar - M > 0) {
                this.YouBar = this.MonsterBar - M;
            } else {
                this.YouBar = 0;
            }
            if (this.MonsterBar - P > 0) {
                this.MonsterBar = this.MonsterBar - P;
            } else {
                this.MonsterBar = 0;
            }
            this.CheckWin();
        },
        PlayerSpecialAttack: function() {
            var P = Math.floor(Math.random() * 11) + 10;
            text = "PLAYER HITS MONSTER FOR " + P
            this.attacks.push(text);
            var M = this.MonsterAttack();
            if (this.YouBar - M > 0) {
                this.YouBar = this.MonsterBar - M;
            } else {
                this.YouBar = 0;
            }
            if (this.MonsterBar - P > 0) {
                this.MonsterBar = this.MonsterBar - P;
            } else {
                this.MonsterBar = 0;
            }
            this.CheckWin();
        },
        PlayerHeal: function() {
            var P = Math.floor(Math.random() * 6) + 5;
            text = "PLAYER HEALS FOR " + P
            this.attacks.push(text);
            var M = this.MonsterAttack();
            if (this.YouBar - M + P > 0) {
                this.YouBar = this.MonsterBar - M + P;
            } else {
                this.YouBar = 0;
            }
            this.CheckWin();
        },
        GiveUp: function() {
            this.NewGame = true;
            alert("Monster Wins!");
        },
        CheckWin: function() {
            if (this.MonsterBar == 0) {
                alert("You Win!");
                this.NewGame = true;
            } else if (this.YouBar == 0)
                this.GiveUp();
        }
    }
});