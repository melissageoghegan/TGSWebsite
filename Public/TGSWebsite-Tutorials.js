$(document).ready(function () {
	tinymce.init({
		selector: '#TutorialContent',
		plugins:
			'accordion autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect typography inlinecss',
		menubar: 'edit insert format tools',
		menu: {
			edit: { title: 'Edit', items: 'undo redo copy cut paste selectall' },
			format: {
				title: 'Format',
				items:
					'align lineheight backcolor blocks bold italic underline strikethrough codeformat superscript subscript forecolor fontsize fontfamily language removeformat'
			},
			insert: { title: 'Insert', items: 'hr table specialcharacters emojis codesample' },
			tools: { title: 'Tools', items: 'help' }
		},
		toolbar:
			'undo redo | edit blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
		tinycomments_mode: 'embedded',
		tinycomments_author: 'Author name',
		mergetags_list: [
			{ value: 'First.Name', title: 'First Name' },
			{ value: 'Email', title: 'Email' }
		]
	});
});
