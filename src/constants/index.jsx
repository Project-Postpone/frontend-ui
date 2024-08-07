import { FolderOpenDot, FolderOpenDotIcon, NotebookPen, ScanEyeIcon, ScrollText, ScrollTextIcon, UserRoundCheckIcon } from "lucide-react";



const K = {

   NAVLINKS: [
      
      {
         icon: <UserRoundCheckIcon />,
         text: "Profile",
         link: "/dashboard/profile"
      },
      
      {
         icon: <ScrollTextIcon />,
         text: "Schedule Mail",
         link: "/dashboard/scheduledmails",
      },
      {
         icon: <ScanEyeIcon />,
         text: "Send Mail",
         link: "/sendmail"
      }
   ],

  

   OVERVIEW:
      [
         {
            icon: <NotebookPen />,
            text: "sendmail",
            total: 10
         },
         
         {
            icon: <ScrollText />,
            text: "scheduledmails",
            total: 50
         },
         {
            icon: <FolderOpenDotIcon />,
            text: "sentmails",
            total: 100
         },
      ],

   
    }

   

export default K;