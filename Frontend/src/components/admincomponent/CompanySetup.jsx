import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Label, Input } from "@radix-ui/react-label";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";

const CompanySetup = () => {

  const params =useParams();
  useGetCompanyById(params.id);

  const [input, setInput] = useState({
name:"",
description:"",
website:"",
location:"",
file: null,
  });
  const {singleCompany} =useSelector((store)=>store.company);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler=(e)=>{
    const file =e.target.files?.[0];
    setInput({...input,file});
  };

  const submitHandler = async(e) =>{
    e.preventDefault();
    const formData =new FormData();
    formData.append("name",input.name);
    formData.append("description",input.description);
    formData.append("website",input.website);
    formData.append("location",input.location);

    if(input.file){
      formData.append("file",input.file);
    }
    try{
      setLoading(true);
      const res =await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${params.id}`,
        formData,
        {
          headers:{
            "Content-Type":"multipart/form-data",
          },
          withCredentials:true;
        }
      );
      console.log(res);

      if(res.status ===200 && res.data.message){
        toast.success(res.data.message);
        navigate("/admin/companies");
      }else{
        throw new Error("Unexpected API response.");
      }
    }catch(error){
      const errorMessage =error.response?.data?.message||"An unexpected error occured.";
      toast.error(errorMessage);
    }finally{
      setLoading(fasle);
    }
  };

  useEffect(()=>{
    setInput({
      name:singleCompany.name||"",
description: singleCompany.description ||"",
website:singleCompany.website||"",
location:singleCompany.location||"",
file: singleCompany.file||null,
    });
  },[singleCompany]);

  return (
    <div>
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-8">
            <Button
              onClick={()=>navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-600 font-semibold"
              variant="outline"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="text-xl font-bold text-[#00A264]">Company Setup</h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label> Company Name</Label>
          <Input type="text" name="name" value={input.name} onChange={changeEventHandler}></Input>
            </div>
            <div>
              <Label>Description</Label>
              <Input 
              type="text"
               name="description" 
               value={input.description} 
               onChange={changeEventHandler}></Input> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
