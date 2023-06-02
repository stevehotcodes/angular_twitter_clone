export interface Iposts{
    userID:string
    id:number
    title:string
    body:string
}
export interface Iusers{
    username:string
    id:string
    email:string
    website:string

}
export interface Icomments{
    postId:number
    id:number
    name:string
    email:string
    body:string
}