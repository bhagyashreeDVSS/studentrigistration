import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  // loginForm= new FormGroup({
  //   user : new FormControl('' , [Validators.required,Validators.pattern('[a-zA-Z]+$')])
  // })

  isfromsubmit: boolean = false;

  loginForm = new FormGroup({

    id: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    rollno: new FormControl('', [Validators.required, Validators.pattern(/^\d{1 - 10}$/)]),
    tenth: new FormControl('', [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
    twelth: new FormControl('', [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
    graduation: new FormControl('', [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
    address: new FormControl('', [Validators.required]),
    phoneno: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)])

  })
  // /^\d[a-z]\d{2}\/[a-z]{3,}\/\d{1,3}$/i

  entries: any = [
    //   {
    //   "address"    :    "ssss",
    //   "firstname"    :     "ggg" ,
    //   "graduation"    :     "66",
    //   "lastname "   :     "ddd",
    //   "phoneno"    :     1234512345,
    //   "rollno"    :     12,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gau",
    //   "firstname"    :     "gau" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512345,
    //   "rollno"    :     17,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gaurii",
    //   "firstname"    :     "gauii" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512348,
    //   "rollno"    :     15,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gaumm",
    //   "firstname"    :     "gaumm" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512349,
    //   "rollno"    :     16,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauee",
    //   "firstname"    :     "gauee" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512376,
    //   "rollno"    :     13,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gau",
    //   "firstname"    :     "gau" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512345,
    //   "rollno"    :     23,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gaurr",
    //   "firstname"    :     "gaurr" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234652345,
    //   "rollno"    :     87,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gaudd",
    //   "firstname"    :     "gaudd" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512765,
    //   "rollno"    :     187,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauss",
    //   "firstname"    :     "gauss" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234519345,
    //   "rollno"    :     9,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gaucc",
    //   "firstname"    :     "gaucc" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512985,
    //   "rollno"    :     1,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     66,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     665,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },

    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     666,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     667,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     668,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     669,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
    // {
    //   "address"    :    "gauccxx",
    //   "firstname"    :     "gauccxx" ,
    //   "graduation"    :     "44",
    //   "lastname "   :     "gayyrr",
    //   "phoneno"    :     1234512923,
    //   "rollno"    :     662,
    //   "tenth"    :     "55",
    //   "twelth"    :     "55"
    // },
  ];
  item: any;
  perpage: any = 5;
  startindex: any;
  pageno: any;
  total: any;
  endindex: any;
  pagination: any = [];
  noofpage: any;
  // let latestid = 0;
  pageNumber: any = []
  actionbutton: any = []
  entry: any;
  data: any;
  arrays: any = []

  getdata: any = []



  loginuser() {
    // console.warn(this.loginForm.value);
    //  alert(this.loginForm.value.rollno);

    const obj = (this.loginForm.value);

    const entries = Object.entries(obj);
    // console.log(obj);
    this.entries.push(obj);
    //  function ro(){
    //   const s = entries.sort();
    //   console.log(s)
    //  }

    function remove() {
      return entries.filter((item, index) => entries.indexOf(item) === index)
    }

  }


  get() {
    const obj = this.loginForm.value;
    // console.log(obj);

  }


  ngOnInit() {

    this.total = this.entries.length
    this.noofpage = Math.ceil(this.total / this.perpage)
    for (var x = 1; x <= this.noofpage; x++) {

      this.actionbutton.push(x)
      console.log("this is calledddd");
      console.log(this.actionbutton);
    }
  }

  page1(index: any) {
    // alert(index)

    // if(index == 1)
    // {

    // this.arrays = this.entries.slice(0,5);
    // }
    // if(index == 2)
    // {

    // this.arrays = this.entries.slice(5,10);
    // console.log(this.arrays);

    // }
    // if(index == 3)
    // {

    // this.arrays = this.entries.slice(10,15);
    // }
    // if(index == 4)
    // {

    // this.arrays = this.entries.slice(15,20);
    // }

    for (var i = 0; i == 0; i++) {

      for (var j = 1; j <= i + 1; j++) {
        this.arrays = []
        this.arrays = this.entries.slice(i, j + 4)
      }
    }
  }



  order() {


    const rollno = this.loginForm.value.rollno;
    const firstname = this.loginForm.value.firstname;
    const lastname = this.loginForm.value.lastname;
    const phoneno = this.loginForm.value.phoneno;

    let newData = {
      // id: this.loginForm.value.id,
      firstname: this.loginForm.value.firstname,
      lastname: this.loginForm.value.lastname,
      rollno: rollno,
      tenth: this.loginForm.value.tenth,
      twelth: this.loginForm.value.twelth,
      graduation: this.loginForm.value.graduation,
      address: this.loginForm.value.address,
      phoneno: this.loginForm.value.phoneno,
    };



    console.log("going", this.entries);
    localStorage.setItem("records", JSON.stringify(this.entries))
    if (this.entries.length == 0) {
      // console.log("aaa");
      this.entries.push(newData);

    }
    else {

      // console.log("aaadd");
      // Check if rollno already exists
      const rollnoExists = this.entries.filter((e: any) => e.rollno === rollno || e.phoneno === phoneno);
      // || e.firstname === firstname || e.lastname === lastname
      if (rollnoExists.length > 0) {
        // console.log("asssaa", rollnoExists);

        // console.log("Rollno already exists. Data not added.");
        alert("Rollno already exists. Data not added.");
      } else {
        // console.log("aaavv");


        this.entries.push(newData);

        // console.log("Data added successfully.");
        alert("Data added successfully.");
        this.entry = this.entries.length;
        console.log(this.entry);

        this.total = this.entries.length
        this.noofpage = Math.ceil(this.total / this.perpage)
        this.actionbutton = []
        for (var x = 1; x <= this.noofpage; x++) {

          this.actionbutton.push(x)
          console.log("this is calledddd");
          console.log(this.actionbutton);
        }
      }

    }
    this.isfromsubmit = false;
    let a: any = localStorage.getItem("records");


  }

  fdata() {
    alert("gotit")
    this.data = this.entries
    // const data = this.loginForm.value;

    // Convert the data to a JSON string
    const dataString = JSON.stringify(this.data);

    // Store the data in the local storage with a specified key
    localStorage.setItem('myData', dataString);


    const storedDataString = localStorage.getItem('myData');

    if (storedDataString) {
      // console.log("dddstored data");

      // Convert the JSON string back to an object
      const storedData = JSON.stringify(storedDataString);


      // Use the retrieved data
      document.write(storedData)
      // console.log(storedData);
    }
  }

  sort() {
    // console.log("aaa");
    this.entries.sort((a: any, b: any) => a.rollno - b.rollno);
  }

  sortd() {
    // console.log("descending");

    this.entries.sort((a: any, b: any) => b.rollno - a.rollno);
  }

  // loginForm: FormGroup;


  edit(item: any) {
    this.item = item;
    this.isfromsubmit = true
    // let latestid = 0;
    //  latestid += 1 ;

    console.log(item);
    this.loginForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(item.firstname, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      lastname: new FormControl(item.lastname, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      rollno: new FormControl(item.rollno, [Validators.required, Validators.pattern(/^\d[a-z]\d{2}\/[a-z]{3,}\/\d{1,3}$/i)]),
      tenth: new FormControl(item.tenth, [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
      twelth: new FormControl(item.twelth, [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
      graduation: new FormControl(item.graduation, [Validators.required, Validators.pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]),
      address: new FormControl(item.address, [Validators.required]),
      phoneno: new FormControl(item.phoneno, [Validators.required, Validators.pattern(/^\d{10}$/)])
    })

  };




  update() {
    // const data = this.loginForm.value
    // this.entries.push(data);
    const data = this.loginForm.value
    console.log(data);



    // const updatedata = this.edit(item)
    let index = this.entries.indexOf(this.item);
    console.log(index);

    let indexy = this.entries.indexOf(this.item);
    // if (index !== -1) {
    //   this.entries[index] = data;
    //   console.log(this.entries);

    // if (index >= 0 && index < this.entries.length) {
    //   this.entries[index] = data;

    //   console.log(this.entries);

    // }
    const rollno = this.loginForm.value.rollno;
    const firstname = this.loginForm.value.firstname;
    const lastname = this.loginForm.value.lastname;
    const phoneno = this.loginForm.value.phoneno;
    // console.log(rollno);
    // console.log(firstname);
    // console.log(lastname);

    const check = this.entries.filter((e: any) => e.rollno === rollno || e.phoneno === phoneno)
    console.log(check);

    if (check.length > 0) {

      alert("already exist")
    } else {
      console.log("hhhhhhh");

      const data = this.loginForm.value
      console.log(data);
      let index = this.entries.indexOf(this.item);
      console.log(index);
      this.entries[index] = data;


      console.log(this.entries);
    }

    this.isfromsubmit = false
    this.loginForm.reset()
  }


  deleteEntry(index: number) {
    this.entries.splice(index, 1);
  }



  page(it: any) {
    console.log(it);
    this.pagination = [];
    this.pageno = 1
    // this.perpage= 2
    // this.total = this.entries.length
    // this.noofpage = this.total/this.perpage

    // console.log(this.noofpage);


    this.entries;
    console.log(this.entries)
    // let index = this.entries.indexOf(this.item);
    // console.log(index);

    let array = [this.entries]

    // const pagination: any[] = []

    this.startindex = (this.pageno - 1) * this.perpage
    this.endindex = this.startindex + this.perpage

    if (this.startindex == 0) {
      this.startindex
    } else if (this.startindex != 0) {

      for (var no = this.startindex; no < this.entries.length; no++) {

        this.startindex + 5;

      }
    }

    this.pageNumber = []
    for (let a = 0; a <= this.noofpage; a++) {
      this.pageNumber.push(a)
      console.log(this.pageNumber, "ssss", a, 'ss', (it * this.perpage) - this.perpage)
    }
    for (let i = (it * this.perpage) - this.perpage; i < this.entries.length / this.perpage; i++) {
      // 1-1 0  2 0 1 2  2-1  1 2   1*2 2-2 0   2*2 4-2 2
      console.log('looopppppp1111');

      for (let j = i; j == i; j++) {
        console.log('looopppppp222222');

        console.log("ik", i)

        if (this.entries[i]) {
          this.pagination.push(this.entries[i])
          console.log(this.pagination);
        }
      }

    }
  }

  // 2+2
  // 2
  //0  2 4 6
  // i  findout  i++
  //1*2 2 -2  0
  //2*2  4-2  2
  //3*2  6-2   4
  //4*2  8-2  6


  // 10
  // 2 2 2 2 2

  get id() {
    return this.loginForm.get('id')
  }

  get firstname() {
    return this.loginForm.get('firstname')
  }

  get tenth() {
    return this.loginForm.get('tenth')
  }
  get twelth() {
    return this.loginForm.get('twelth')
  }

  get lastname() {
    return this.loginForm.get('lastname')
  }

  get graduation() {
    return this.loginForm.get('graduation')
  }

  get rollno() {
    return this.loginForm.get('rollno')
  }

  get address() {
    return this.loginForm.get('address')
  }

  get phoneno() {
    return this.loginForm.get('phoneno')
  }
  constructor() {

  }



}


