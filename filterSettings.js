if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
} else if (condition) {
    
}
$().empty().append(html)

function filtering(allSettings){
    var html;
    var mandatory = $('#displyOnlyMandatory1').is(":checked");
    var forceRanking = $('#displyOnlyforceRanking1').is(":checked");
    var active = $('#displyOnlyactive1').is(":checked"); 
    
    $.each(allSettings,function(index,item){
    
        if(( mandatory== true)&&(forceRanking==true)&&(active==true)){ 
           if((item.Mandatory == "Yes")&&(item.ForceRanking == "true")&&(item.Disable == "true")){
            html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';            
           }
        }else if(( mandatory== true)&&(forceRanking==true)&&(active==false)){
            if((item.Mandatory == "Yes")&&(item.ForceRanking == "true")&&(item.Disable == "false")){
            html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
            }
        $("#settingsTable").empty().append(html);
        }else if((mandatory== true)&&(forceRanking==false)&&(active==true)){
            if((item.Mandatory == "Yes")&&(item.ForceRanking == "false")&&(item.Disable == "true")){
                html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
                }
        $("#settingsTable").empty().append(html);
        }else if(( mandatory== true)&&(forceRanking==false)&&(active==false)){
            if((item.Mandatory == "Yes")&&(item.ForceRanking == "false")&&(item.Disable == "false")){
                html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
                }
        $("#settingsTable").empty().append(html);
        }else if(( mandatory== false)&&(forceRanking==true)&&(active==true)){
            if((item.Mandatory == "No")&&(item.ForceRanking == "true")&&(item.Disable == "true")){
                html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
                }
        $("#settingsTable").empty().append(html);
        }else if(( mandatory== false)&&(forceRanking==true)&&(active==false)){
            if((item.Mandatory == "No")&&(item.ForceRanking == "true")&&(item.Disable == "false")){
                html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
                }
        $("#settingsTable").empty().append(html);
        }else if(( mandatory== false)&&(forceRanking==false)&&(active==true)){
            if((item.Mandatory == "No")&&(item.ForceRanking == "false")&&(item.Disable == "true")){
                html+='<tbody><tr><td><label class="check">'+item.Title+'<input type="checkbox" name="is_company" ><span class="checkmark"></span></label></td><td>'+item.RankingOrder+'</td><td><label class="switch"><input type="checkbox"  id='+item.id+' onclick="getUserchagedSettings('+i+')"><span class="slider round""></span></label></td></tr><tbody>';
            }
        $("#settingsTable").empty().append(html);
        }else{
        displayLoginUserSettings(newArray);
        }
     });
    }