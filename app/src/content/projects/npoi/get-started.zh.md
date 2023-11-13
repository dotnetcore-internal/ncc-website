## 安装 NuGet 包

```powershell
Install-Package DotNetCore.NPOI
```

## 如何在 Linux 上使用？

在 Linux 上，你需要安装 `libgdiplus`。从 1.2.0 开始，还需要 libdl。

- Ubuntu 16.04 及以上：
    - apt-get install libgdiplus libc6-dev
    - cd /usr/lib
    - ln -s libgdiplus.so gdiplus.dll
- Fedora 23 及以上：
    - dnf install libgdiplus
    - cd /usr/lib64/
    - ln -s libgdiplus.so.0 gdiplus.dll
- CentOS 7 及以上：
    - yum install autoconf automake libtool
    - yum install freetype-devel fontconfig libXft-devel
    - yum install libjpeg-turbo-devel libpng-devel giflib-devel libtiff-devel libexif-devel
    - yum install glib2-devel cairo-devel
    - git clone <https://github.com/mono/libgdiplus>
    - cd libgdiplus
    - ./autogen.sh
    - make
    - make install
    - cd /usr/lib64/
    - ln -s /usr/local/lib/libgdiplus.so gdiplus.dll

- Docker
    - Alpine

      ```
      # base sdk-alpine/aspnetcore-runtime-alpine images
  
      RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
      RUN apk --update add libgdiplus
      ```

    - Debian

      ```
      FROM microsoft/dotnet:2.1-aspnetcore-runtime
      RUN apt-get update && apt-get install -y libgdiplus libc6-dev && ln -s /usr/lib/libgdiplus.so /usr/lib/gdiplus.dll
      ...
      ```

## 开始

### 导出 Excel

```csharp
var newFile = @"newbook.core.xlsx";

using (var fs = new FileStream(newFile, FileMode.Create, FileAccess.Write)) {

    IWorkbook workbook = new XSSFWorkbook();

    ISheet sheet1 = workbook.CreateSheet("Sheet1");

    sheet1.AddMergedRegion(new CellRangeAddress(0, 0, 0, 10));
    var rowIndex = 0;
    IRow row = sheet1.CreateRow(rowIndex);
    row.Height = 30 * 80;
    row.CreateCell(0).SetCellValue("this is content");
    sheet1.AutoSizeColumn(0);
    rowIndex++;

    var sheet2 = workbook.CreateSheet("Sheet2");
    var style1 = workbook.CreateCellStyle();
    style1.FillForegroundColor = HSSFColor.Blue.Index2;
    style1.FillPattern = FillPattern.SolidForeground;

    var style2 = workbook.CreateCellStyle();
    style2.FillForegroundColor = HSSFColor.Yellow.Index2;
    style2.FillPattern = FillPattern.SolidForeground;

    var cell2 = sheet2.CreateRow(0).CreateCell(0);
    cell2.CellStyle = style1;
    cell2.SetCellValue(0);

    cell2 = sheet2.CreateRow(1).CreateCell(0);
    cell2.CellStyle = style2;
    cell2.SetCellValue(1);

    workbook.Write(fs);
}
```

### 导出 Word

```csharp
var newFile2 = @"newbook.core.docx";
using (var fs = new FileStream(newFile2, FileMode.Create, FileAccess.Write)) {
    XWPFDocument doc = new XWPFDocument();
    var p0 = doc.CreateParagraph();
    p0.Alignment = ParagraphAlignment.CENTER;
    XWPFRun r0 = p0.CreateRun();
    r0.FontFamily = "microsoft yahei";
    r0.FontSize = 18;
    r0.IsBold = true;
    r0.SetText("This is title");

    var p1 = doc.CreateParagraph();
    p1.Alignment = ParagraphAlignment.LEFT;
    p1.IndentationFirstLine = 500;
    XWPFRun r1 = p1.CreateRun();
    r1.FontFamily = "·ÂËÎ";
    r1.FontSize = 12;
    r1.IsBold = true;
    r1.SetText("This is content, content content content content content content content content content");

    doc.Write(fs);
}
```