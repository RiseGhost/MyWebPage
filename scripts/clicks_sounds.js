const click_sound = new Audio("./sounds/click-sound.mp3")

const a = document.getElementsByTagName("a")

for (let index = 0; index < a.length; index++){
	a[index].addEventListener('click',event => {
		event.preventDefault()
		click_sound.play()
		setTimeout(() => {
			window.location.href = a[index].href
		},1000)
	})
}

document.getElementById("btn_back").addEventListener('click',(event) => {
	click_sound.play()
	setTimeout(() => {history.back()},1000)
})