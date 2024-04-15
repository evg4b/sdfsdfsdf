package main

import "runtime"

func main() {
	println("This is a test program to check the runtime environment of the Go program.")
	println("GOOS: ", runtime.GOOS)
	println("GOARCH: ", runtime.GOARCH)
	println("Version: ", runtime.Version())
	println("Number of CPUs: ", runtime.NumCPU())
}
