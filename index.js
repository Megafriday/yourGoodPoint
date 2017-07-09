(function(){
	'use strict';

	const userNameInput = document.getElementById('user-name');
	const assessmentButton = document.getElementById('assessment');
	const resultDivided = document.getElementById('result-area');
	const tweetDivided = document.getElementById('tweet-area');

	assessmentButton.onclick = () => {
		const userName = userNameInput.value;
		if (userName.length === 0) {
			return;
		}

		const result = assessment(userName);

		//初期化
		resultDivided.innerText='';

		const h3 = document.createElement('h3');
		h3.innerText = '診断結果';
		resultDivided.appendChild(h3);

		const p = document.createElement('p');
		p.innerText = result;
		resultDivided.appendChild(p);

		//tweet領域
		tweetDivided.innerText='';
		const a = document.createElement('a');
		a.setAttribute('href', 'https://twitter.com/intent/tweet?button_hashtag=%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E8%89%AF%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D%E8%A8%BA%E6%96%AD&text=' + encodeURIComponent(result));
		a.setAttribute('data-lang', 'ja');
		a.setAttribute('data-size', 'large');
		a.innerText = 'Tweet #%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E8%89%AF%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D%E8%A8%BA%E6%96%AD';
		a.className = 'twitter-hashtag-button';
		tweetDivided.appendChild(a);
		twttr.widgets.load();	//表示用のJS再読込み
	}

	userNameInput.onkeydown = (event) =>{
		if(event.keyCode === 13){
			assessmentButton.onclick();
		}
	}

	const answers = [
		'{userName}のいいところは声です。{userName}の特徴的な声はみなを惹きつけ、心に残ります。',
		'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
		'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
		'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
		'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
		'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
		'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
		'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
		'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
		'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
		'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
		'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
		'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
		'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
		'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
		'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
	];

	function assessment(userName){
		let sumOfcharcode = 0;
		for (var i = 0; i < userName.length; i++) {
			sumOfcharcode = sumOfcharcode + userName.charCodeAt(i);
		}

		let index = sumOfcharcode % answers.length;

		return answers[index].replace(/\{userName\}/g, userName);

	}

})();