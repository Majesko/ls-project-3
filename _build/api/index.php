<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-4 col-lg-offset-4">
            <h3>Create watermark</h3>
            <form class="form" enctype="multipart/form-data" action="watermarker.php" role="form" method="post" id="postForm">
                <div class="row">
                    <div class="form-group col-lg-12">
                        <label for="image">Image</label>
                        <input class="form-control" type="file" name="image"/>
                    </div>
                    <div class="form-group col-lg-12">
                        <label for="image">Watermark</label>
                        <input class="form-control" type="file" name="watermark"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-lg-6">
                        <label for="position">Position</label>
                        <select name="position" id="">
                            <option value="" selected="selected">none</option>
                            <option value="top">top</option>
                            <option value="bottom">bottom</option>
                            <option value="left">left</option>
                            <option value="right">right</option>
                            <option value="pattern">pattern</option>
                        </select>
                    </div>
<!--                    <div class="form-group col-lg-6">-->
<!--                        <label for="pattern">Patttern</label>-->
<!--                        <input type="checkbox" name="pattern"/>-->
<!--                    </div>-->
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Отправить"/>
                </div>
            </form>
            <div id="result"></div>
        </div>
    </div>
</div>
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script>
    var postForm = (function() {

        var init = function() {
            _setUpListeners();
        }

        var _setUpListeners = function() {
            $('#postForm').on('submit', _postForm);
        }

        var _postForm = function(ev) {
            ev.preventDefault();
            console.log('submit clicked');
            var form = $(this),
                url  = '/watermarker.php',
                defObj = _ajaxForm(form, url);

            if(defObj) {
                defObj.done(function(answer) {
                    var message = answer.message,
                        status  = answer.status;
                })
            }

            $('#result').empty().append(form);
        }

        var _ajaxForm = function(form, url) {

            var data = form.serialize();
            $('#result').append(data);
            return $.ajax({
                type: 'POST',
                url: url,
                dataType: 'JSON',
                data: data
            }).fail(function(messages) {
                console.log();
            });
        }

        return {
            init: init
        }
    }());

//    postForm.init();
</script>
</body>
</html>