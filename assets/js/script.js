$('document').ready(function(){
  $.ajax({
    url: "http://acadprojects.com/py/notes/sharing/note",
    type:"GET",
    success: function(result){
      console.log(result);

       var newNotes = result.notes;
       console.log(newNotes);

       var length = newNotes.length;

       for (var i = 0; i<length; i++)
       {
        var noteObject = newNotes[i];

        var sno = i + 1;
        var notesName = noteObject.doc_name;
        var description = noteObject.doc_description;
        var subject = noteObject.subject.subject;
        var url = noteObject.doc_url;

         var type= noteObject.document_type;

        // if(type =='study Material')
        // {
            $('#studyMaterials tbody').append('<tr> <td> '+sno+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
       //}
        //
        // else if(type == 'question Papers')
        // {
        //     $('#questionPapers tbody').append('<tr> <td> '+sno+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
        // }
        //
        // else if(type == 'project Report')
        // {
        //     $('#projectReports tbody').append('<tr> <td> '+sno+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
        // }
        //


      }

    }});
  });
