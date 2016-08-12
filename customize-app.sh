#!/bin/bash

if [ $# -ne 2 ]
  then
    echo "This script requires exactly 2 arguments: brand_path_name followed by brand_name"
    echo "For example: ./customize-app.sh brandname Brandname"
    exit 1
fi

mv -f content-core/src/main/content/jcr_root/apps/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/apps/$1
mv -f content-core/src/main/content/jcr_root/content/dam/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/content/dam/$1
mv -f content-core/src/main/content/jcr_root/content/screens/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/content/screens/$1
mv -f content-core/src/main/content/jcr_root/content/catalogs/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/content/catalogs/$1
mv -f content-core/src/main/content/jcr_root/etc/designs/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/etc/designs/$1/
mv -f content-core/src/main/content/jcr_root/etc/scaffolding/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/etc/scaffolding/$1/
mv -f content-core/src/main/content/jcr_root/etc/commerce/products/brand-pathname-placeholder/ content-core/src/main/content/jcr_root/etc/commerce/products/$1

find . -name brand-pathname-placeholder -type d -depth -execdir mv {}1 \;
find . -name brand-name-placeholder -type d -depth -execdir mv {}2 \;

find . -type f \( -name '*.xml' -o -name '*.jsp' -o -name '*.js' -o -name '*.html' -o -name '*.java' -o -name '*.txt' \) -depth -exec sed -i '' s/brand-pathname-placeholder/$1/g {} \;
find . -type f \( -name '*.xml' -o -name '*.jsp' -o -name '*.js' -o -name '*.html' -o -name '*.java' -o -name '*.txt' \) -depth -exec sed -i '' s/brand-name-placeholder/$2/g {} \;

echo "Finished customizing your screens app with $1 and $2."