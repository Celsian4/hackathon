buttons = document.querySelectorAll('.topic-select');

buttons.forEach(el => {
   el.addEventListener('click', function(e) {
      var topic = String(el.id);
      localStorage.setItem("TOPIC", topic);
   });
});