

export interface Tslider{
    id:number,
    Title:string,
    Image:string,
    Description:string
}

export interface Tourcourses{
    id:number,
    Course_Name: string,
    Course_Image:string,
    Course_Description:string
}

export interface TPresidents{
    id:number,
    President_Name:string,
    Description:string,
    Year_Started:string,
    Year_Completed:string,
    President_Image:string
}

export interface Tboard{
    id:number,
    Name:string,
    Docket:string,
    Rotary_id:string,
    Description:string,
    Image:string
}

export interface Tevent{
    id:number,
    Event_Name:String,
    Date:string,
    Location:string,
    Description:string,
    Organised_By:string,
    Event_Image:string
}

export interface Tproject{
    id:number,
    Project_Name: string,
    Start_Date:string,
    End_Date:string,
    Description:string,
    Project_Image:string
}

export interface Tblogs{
    id:number,
    Blog_Title:string,
    Content:string,
    author_name:string,
    Image:string,
    Created_on:string,
    Updated_on:string
}

export interface Tgallery{
    id:number,
    gallery_title:string,
    description:string,
    Image:string,
    gallery_url:string,
    created_on:string
}

export interface Tdownload{
    id:number,
    title:string,
    description:string,
    url:string,
    file_type:string,
    uploaded_on:string
}

export interface Ttestmonials{
    id:number,
    name:string,
    designation:string,
    image:string,
    message:string,
    is_approved:string,
    created_on:string
}

export interface Tmission{
    id:number,
    name:string,
    description:string
}

export interface Ttemplates{
    id:number,
    Name:string,
    Description:string,
    Category:string,
    Image_url:string,
    Psd_file:string,
    created_at:string
}

export interface Tmembers{
    id:number,
    name:string,
    course:string,
    Phone:string,
    year:string,
    email:string
}