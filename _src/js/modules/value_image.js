$(function() {
	// отслеживаем загрузку изображения
	$('.form__input_file').change(function() {
		// в переменную заносим значение value, если загружено изображение
		var fileResult = $(this).val();
		
		// передаём значение инпуту с типом текст из инпута с типом файл
		$(this).prev('.form__input_text').val(fileResult);
		
	});
});