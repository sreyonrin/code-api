$(document).ready(function(){
    $('button').on('click',function(){
        var url ="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true";
        $.ajax({
            url:url,
            dataType:'json',
            success:function(data){
                var result ="";
                data.hits.forEach(element => {
                    result += `
                        <div class="card shadow-lg mt-4">
                            <div class="card-header">
                                <img src="${element.largeImageURL}" class ="rounded-circle" width="50" height="50">
                                ${element.user}
                                </div>
                        </div>
                    `;
                });
                $('#result').append(result);
            }
        });
    });
});