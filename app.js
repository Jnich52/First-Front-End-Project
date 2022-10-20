//make buttons
const $inputField = $("input").prop({id: "inputField"});
const $searchBar = $("#inputField");
const $pre = $("pre")
const $genre = $("#genre")
const $story = $("#story")
const $searchButton = $("#gen");
const $storyButton = $("#book")


//make search button get data
$searchButton.on("click", function(){

  console.log('Appreciation')
  console.log('Thanks David')
  console.log('Thanks Juju')
  console.log('Thanks Gabe')

  // $searchButton.on("mouseOver", function(){

  //get data with AJAX 
  $.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/" , (data) => {
  $  
  console.log(data)
    $genre.text(data)

});

});

$storyButton.on("click", function(){
  $.get("https://binaryjazz.us/wp-json/genrenator/v1/story/1" , (data) => {
  $story.text(data)
  console.log(data)
});
});



