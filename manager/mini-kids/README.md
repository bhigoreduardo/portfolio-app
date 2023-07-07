# Manager Store PDV

- Create React: `yarn create`
- Create Tailwind: `yarn tailwindcss init -p`
- Dependencies: `yarn add @faker-js/faker axios chart.js formik html2pdf.js react react-chartjs-2 react-dom react-router-dom react-toastify yup`
- Dev Dependencies: `yarn add -D autoprefixer postcss tailwindcss`

- Xampp Server: `C:\xampp\apache\conf\extra\httpd-vhosts.conf file`

```Server:
<VirtualHost 127.0.0.1:80>
    ServerName plataforma.com
    ServerAlias www.plataforma.com
    ServerAdmin webmaster@plataforma.com
    DocumentRoot "C:/xampp/htdocs/build"
    <Directory C:/xampp/htdocs/build>
        Options Indexes FollowSymLinks MultiViews
AllowOverride all
Order Deny,Allow
        Allow from all
        Require all granted
    </Directory>
</VirtualHost>
```

- Windows DNS: `C:/Windows/System32/drivers/etc/hosts file`

`127.0.0.1         www.plataforma.com`

- Navigation file: `.htaccess file in public folder`

```Navigation:
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

- Home: `"homepage": "http://www.plataforma.com"`
