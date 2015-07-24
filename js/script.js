/**
 * Created by sagakulk on 6/17/2015.
 */
$(function(){
    var $categories = [

        {
            name  :   "Shoes",
            products :
                [
                { image: "../img/shoes1.jpg", name: "Shoe1", price: "1000"},
                { image: "../img/shoes1.jpg", name: "Shoe2", price: "2000"},
                { image: "../img/shoes1.jpg", name: "Shoe3", price: "3000"},
                { image: "../img/shoes1.jpg", name: "Shoe4", price: "4000"}]
        },
        {
            name  :   "Rackets",
            products :
                [
                    { image: "../img/racket.jpg", name: "Racket1", price: "1000"},
                    { image: "../img/racket.jpg", name: "Racket2", price: "4000"},
                    { image: "../img/racket.jpg", name: "Racket3", price: "6000"}
                    ]
        },
        {
            name  :   "Kit",
            products :
                [
                    { image: "../img/kit.jpg", name: "Kit1", price: "1000"},
                    { image: "../img/kit.jpg", name: "Kit2", price: "2000"}]
        }
        ]



var $FinalCategories="";
var $gen="";
for(var $i=0;$i<$categories.length;$i++)
{
    $gen=$gen+'<section class="accessoriesbestsellers"><header class="backgroundgradient">'+$categories[$i].name+'</header>';
    for(var $j=0;$j<$categories[$i].products.length;$j++)
    {
       var $image =$categories[$i].products[$j].image;
       var $name = $categories[$i].products[$j].name;
       var $price =$categories[$i].products[$j].price;
       var $str='<article class="productarticle"><figure><img id="image" class="productarticlethumbnail" src="'+$image+'"/></figure><header><span class="productarticlename"><a id="name" href="shoedetails.html">'+$name+'</a></span></header><p id="price" class="productarticleprice">Rs . '+$price+'</p><div class="addtocartbutton">Add to Cart</div></article>';
        $gen=$gen+$str;
    }
    $FinalCategories=$gen+'</section>';
}

    $("#Categories").html($FinalCategories);
});