/* Reusable quiz widget. Markup contract:
 *
 * <div class="quiz" data-answer="1" data-explain="Because ...">
 *   <div class="q">Question text?</div>
 *   <div class="options">
 *     <button class="opt">Option zero</button>
 *     <button class="opt">Option one</button>   <-- data-answer is 0-based index
 *   </div>
 *   <div class="feedback"></div>
 * </div>
 *
 * Gives immediate, automatic feedback (tight feedback loop for skill building).
 * Keep every option the same length so formatting leaks no clues.
 */
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var answer = parseInt(quiz.dataset.answer, 10);
  var explain = quiz.dataset.explain || '';
  var opts = Array.prototype.slice.call(quiz.querySelectorAll('.opt'));
  var feedback = quiz.querySelector('.feedback');

  opts.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      opts.forEach(function (b) { b.disabled = true; });
      opts[answer].classList.add('correct');
      if (i === answer) {
        feedback.textContent = 'Correct. ' + explain;
        feedback.className = 'feedback correct';
      } else {
        btn.classList.add('wrong');
        feedback.textContent = 'Not quite. ' + explain;
        feedback.className = 'feedback wrong';
      }
    });
  });
});
