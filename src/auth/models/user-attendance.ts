export interface UserAttendance {
    id:number;
    empid:number;
    name:string;
    is_present:boolean;
    date:Date;
    login_time:Date;
    logout_time:Date;
    remarks:string;
    total_days_present:number;
    leave_taken:number;
    total_no_of_days:number;
}
