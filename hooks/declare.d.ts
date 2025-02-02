export interface User{
    username:string
    email:string
}
export interface Laptop{
    category:string|null
    model:string
    description:string
    price:number
}
export interface AppContextType {
    theme: string;
    setTheme: (theme: string) => void;
    user: User | null; // Replace 'User' with your user type
    setUser: React.Dispatch<React.SetStateAction<User|null>>    
    isLoading: boolean;
    setIsLoading: (loading:boolean)=>void
    // Add other state properties here
    category:string|null
    setCategory: (category:string|null)=> void
    laptops:Laptop[]
    setLaptops:React.Dispatch<React.SetStateAction<Laptop[]>>
    

}