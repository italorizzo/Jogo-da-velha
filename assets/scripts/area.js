const game_mod = document.getElementById('game-mod')
const threexthree = "index.html"
const fourxfour = "velha4x4.html"

function mod() {
	modalEl.innerHTML = `<h1 class="heading-lg">Modo de jogo</h1>

	<div class="modal__buttons">
		<button id="btn-modo1" class="btn btn--silver-small btn--small">
			3x3
		</button>
		<button id="btn-modo2" class="btn btn--silver-small btn--small">
			4x4
		</button>
	</div>`;

    const btn_modo1 = document.getElementById('btn-modo1')
    const btn_modo2 = document.getElementById('btn-modo2')

    changeDomLayout(modalEl, 'd-none', 'd-block');
	
	modalEl.style.zIndex='1'

    btn_modo1.addEventListener('click', () => {
		location.href = threexthree
	});
    btn_modo2.addEventListener('click', () => {
		location.href = fourxfour
	});
    
}
game_mod.addEventListener('click', mod)
