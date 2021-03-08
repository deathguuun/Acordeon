let coll = document.getElementsByClassName('question__title');
for (let i = 0; i < coll.length; i++) {
   coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + 'px'
      }
   })
}

$(".question__summary").click(function () {
   $(this).toggleClass("clicked");
});

// $(document).ready(function () {
//    $('.question__summary').on('click', function () {
//       $(this).parent().toggleClass('active');
//       console.log($(this).parent().attr('class'));
//    });
// });