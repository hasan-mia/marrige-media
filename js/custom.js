/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */

//Boostrap Carousel
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: true
})

//Subscribe Toast
var subscribeBtn = document.getElementById('liveToastBtn')
var subscribeToast = document.getElementById('liveToast')
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
        var toast = new bootstrap.Toast(subscribeToast)
        toast.show()
    })
}

//Book Now Toast
var bookingBtn = document.getElementById('booknowBtn')
var bookingToast = document.getElementById('booknow')
if (bookingBtn) {
    bookingBtn.addEventListener('click', function() {
        var toast = new bootstrap.Toast(bookingToast)
        toast.show()
    })
}