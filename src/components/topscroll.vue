<template>
  <div class="rules">
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller">
    <div class="bscroll" ref="bscroll">
      <div class="bscroll-container">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
          <li>51</li>
          <li>52</li>
          <li>53</li>
          <li>54</li>
          <li>55</li>
          <li>56</li>
          <li>57</li>
        </ul>
      </div>
    </div>
      </scroller>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueScroller from 'vue-scroller'
  Vue.use(VueScroller)
    export default {
        name: "topscroll",
      methods:{
          //下拉加载
        infinite(done) {
          if(this.noData) {
            setTimeout(()=>{
              this.$refs.myscroller.finishInfinite(2);
            })
            return;
          }
          let self = this;//this指向问题
          let start = this.moveList.length;

          setTimeout(() => {
            for(let i = start + 1; i < start + 10; i++) {
              self.moveList.push(i)
            }
            if(start > 30) {
              self.noData = "没有更多数据"
            }
            self.$refs.myscroller.resize();
            done()
          }, 1500)
        },

//done()表示这次异步加载数据完成，加载下一次
//因为这个是同步的，加了setTimeout就是异步加载数据；
//因为涉及到this指向问题，所以将他放在一个变量里。
        //上拉刷新
        refresh() {
          console.log('refresh')
        }
      }
    }
</script>

<style scoped>
ul li{
  text-align: center;
}
</style>
