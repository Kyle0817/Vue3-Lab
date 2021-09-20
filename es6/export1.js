export default {
    data: [
      '這是第一句話',
      '這是第二句話',
      '這是第三句話'
    ],
    removeData(id) {  //事件觸發
      // console.log(this)
      this.data.splice(id, 1);
      this.render();
    },
    render() {  //渲染方法
      const list = document.querySelector('.component ul');
      let content = '' // li結構使用
      this.data.forEach((item, i) => {
        content = `${content}<li>${item}
          <button type='button' class='btn' data-id='${i}'>刪除</button></li>`;
      });
      list.innerHTML = content;
  
      const btns = document.querySelectorAll('.btn');
      btns.forEach(btn => btn.addEventListener('click', (e) => {
        console.log(e.target.dataset.id)  // 陣列索引位置
        this.removeData(e.target.dataset.id)
      }));
    },
    init() {  // 生命週期
      this.render();
    }
  }