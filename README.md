# SNOTE!
### Get Start
  - Import a Boostrap and Jquery to header and SNOTE :
    - ```
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
- import file SNOTE:
    - ```
    
      <link rel="stylesheet" href="https:/SNOTE/s-note.css">
    
      <script src="https:/SNOTE/s-note.js"></script>

### Usage
   - Installation:
   - add ID << s-noted >> to your text Box :
     - ``` 
         <input type="text" id="s-noted">
         or
         <textarea id="s-noted"></textarea>
### Image Upload   
- Import  Script :
  - ```
    window.sNote = {
                ROUTE:'<<Upload Image Url>>', //laravel (Route), PHP (URL)
                FONT:['Font1','Font2',...],  //More Font
            }
- Php return :
    - ```
        Example:
        <<your code upload image here>>
        $data['image'] = <<image upload name>>
        $data['image_path'] = <<image upload path>>
        return $data;
