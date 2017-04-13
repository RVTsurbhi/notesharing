$('document').ready(function(){
  $.ajax({
    url: "http://acadprojects.com/py/notes/sharing/note",
    type:"GET",
    success: function(result){
      console.log(result);

       var newNotes = result.notes;
       console.log(newNotes);

       var length = newNotes.length;

       var countStudyMaterial = 0;
       var countQuestionPaper = 0;
       var countProjectReport = 0;

       for (var i = 0; i<length; i++)
       {
        var noteObject = newNotes[i];




        var notesName = noteObject.doc_name;
        var description = noteObject.doc_description;
        var subject = noteObject.subject.subject;
        var url = noteObject.doc_url;

         var type= noteObject.document_type;

        if(type =='Study Material')
        {
            countStudyMaterial++;
            $('#studyMaterials tbody').append('<tr> <td> '+countStudyMaterial+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
        }

        else if(type == 'Project Report')
        {
            countProjectReport++;
            $('#projectReports tbody').append('<tr> <td> '+countProjectReport+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
        }

        else if(type == 'Question Papers')
        {
            countQuestionPaper++;
            $('#questionPapers tbody').append('<tr> <td> '+countQuestionPaper+' </td> <td> '+notesName+' </td> <td> '+description+' </td> <td> '+subject+' </td> <td><a target="_blank" href="'+url+'"> download</a></td> </tr>');
        }



      }

    }});
  });
