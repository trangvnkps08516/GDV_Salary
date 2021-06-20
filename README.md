# GDV_Salary

# Structure descriptions

#   src | include all of prj source code
#       assets  | include images
#       comps   | common components be use in screens
#       models  | storage obj information => 1 model = 1 file => all of them will be export at file /models/index.js
#       screens | screens code => all of them will be export at file /screens/index.js
#       utils   | include component about images, dimessions, images path,...
#           Colors | include all of color code to a variable
#           Dimession | include variable about with, height, statusBar,... 
#           Fonts | include font size, font weight, responsive font
#           Image | include all of images file's path
#           Logistics | include funtions to process logic
#           Server | include server's url, api url, ....
#           Storage | funtions involve device local storage
#   App.js | route of all of screens, navigation, decentralization,...

# Notice: all of module must be install from `YARN` to unified in prj.

# Home
#   Dashboard: Dashboard màn hình Home
#   KPIByMonth: KPI theo tháng
#       Dashboard: Dashboard KPI theo tháng
#       Achieve: KPI đạt được
#       TempSalary: Lương tạm tính
#           Dashboard: Dashboard lương tạm tính
#           Fixedwage: Lương cố định
#           Contract: Lương khoán
#   SalaryByMonth: Lương theo tháng
#       Dashboard: Dashboard lương theo tháng
#       Fixedwage: Lương cố định
#       Contract: Lương khoán
#       Arrears: Truy thu
#   AvgIncome: Bình quân thu nhập
#       Dashboard: Dashboard bình quân thu nhập
#       AvgIncomeByMonth: Bình quân thu nhập các tháng
#       AvgIncomeByQuarter: Bình quân thu nhập các quý
#   SubscriberQuality: Chất lượng thuê bao
# Profile
#   Dashboard: Thông tin cá nhân
#   UpdatePassword: Cập nhật mật khẩu
#   UpdateProfile: Cập nhật thông tin cá nhân
# Signout: Đăng xuất

#   *** Descriptions
#   KPI TBTT: KPI thuê bao trả trước
#   KPI TBTS: KPI thuê bao trả sau
#   KPI KHTT: KPI kế hoạch trọng tâm