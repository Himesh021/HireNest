import React from "react";
import { Edit2, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import microsoftLogo from "../../assets/microsoftimage.jpg";

const CompaniesTable = ({ companies }) => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company,
  );
  const [filter, setfilter] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompanfy(filteredCompany);
  }, [companies, searchCompanyByText]);

  console.log("COMPANIES", companies);
  if (!companies) {
    return <div>Loading...</div>;
  }
  return (
    <Table>
      <TableCaption>Your recent registered companies</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Logo</TableHead>
          <TableHead>Company Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredCompany.length <= 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              No Companies Added
            </TableCell>
          </TableRow>
        ) : (
          companies.map((company, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={microsoftLogo} alt="Microsoft logo" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                </TableCell>

                <TableCell className="font-medium">{company.name}</TableCell>

                <TableCell>{company.createdAt.split("T")[0]}</TableCell>

                <TableCell className="text-right relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="p-1 rounded-md hover:bg-muted">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      align="end"
                      sideOffset={8}
                      className="w-32 p-2"
                    >
                      <div className="flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-muted">
                        <Edit2 className="w-4 h-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default CompaniesTable;
