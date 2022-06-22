function Quiz(questions)
{
    this.scores=0;
    this.questions=questions;
this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex=function()
{
    return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded=function()
{
    return this.questions.length===this.getQuestionIndex;
}
Quiz.prototype.guess=function(answer)
{
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer))
    {
this.scores++;
    }
}