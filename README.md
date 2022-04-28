 #Secure

Secure is a Prepaid card (LSSG) website which is still Under Development By Artisan Team from mPokket

## About 
Prepaid credit card, a card that debits money from an associated account that ordinarily uses a signature rather than a PIN for verification. ... Stored-value card, a card that has a monetary value that is recorded as data on the card itself, and thus can be used without online access to an associated account.
## Getting Started


### Dependencies

Dependencies of our project will be
* PHP Version 7.4 and greater
* Laravel 8
* CockroachDb

### Testing tool
* PostMan

### Installing

Download the Composer from the package (once developement of app is done).
* Modifications needed to be made to files.
* After Running the composer package  the vendor file will auto generate the files
* Based on the Auto-Generated file create a new file .env from .env example file
* After creation of .env file update the any connections like database,Mailer etc  for your project.

### Executing program

* How to run the program
* Step-by-step bullets
* Start The Cluster in cockroachDB
* Start the first Node
```
cockroach start --certs-dir=certs --store=node1 --listen-addr=localhost:26257 --http-addr=localhost:8080 --join=localhost:26257,localhost:26258,localhost:26259 --background
```
* Start  the Second Node
```
cockroach start --certs-dir=certs --store=node2 --listen-addr=localhost:26258 --http-addr=localhost:8081 --join=localhost:26257,localhost:26258,localhost:26259 --background
```
* Start the Third Node
```
cockroach start --certs-dir=certs --store=node3 --listen-addr=localhost:26259 --http-addr=localhost:8082 --join=localhost:26257,localhost:26258,localhost:26259 --background
```
* Intialize the Cluster
```
cockroach init --certs-dir=certs --host=localhost:26257
```
* Start your Built-In SQL Client
```
cockroach sql --certs-dir=certs --host=localhost:26257
```
* Check Your Controllers if You Want To Make any Updates
* Start the Server
```
php artisan serve
```
* Verify Your Routes through Postman.
## Help

Our advise for common problems or issues.
```
Follow Basic Documentation of 
 * Larvel
 * Cockroach db
 * PostMan
```
## Authors

* Siva mallesewara reddy Lomada(https://github.com/Artisans-LSSG/secure/tree/SivaMalleswaraReddy-secure)
* Umme Salma)(https://github.com/ummesalma22/PrepaidCard)
* Latha raj (https://github.com/Artisans-LSSG/secure/tree/Latha1)
* Gurukiran Badiger (https://github.com/Artisans-LSSG/secure/tree/gurukiranbadiger-JWT-AUTH)

## Version History

    * Initial Release
## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
