A NuGet package providing inheritability for the SourceLink feature.

## Usage

1. Project author references the package.
2. When publishing the NUGET package, the project author needs to specify the GitHub address of the source code

    as:  `<PackageProjectUrl>https://github.com/dotnetcore/Natasha</PackageProjectUrl>`

3. Users reference the above NUGET package and make the following settings for VS:
   - Options - Debugging - Enable Source Link support.
   - Options - Debugging - Remove the check in front of "Enable Just My Code".

4. When users debug, F11 enters the encapsulated function.