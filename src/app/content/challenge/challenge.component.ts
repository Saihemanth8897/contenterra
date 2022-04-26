import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
declare let $: any
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {
listData:any;
  constructor(private commonService: CommonService) { }

  async ngOnInit() {
  await this.getReditList()
  }
async getReditList(){
  try{
    await this.commonService.getThereditList().subscribe(async (items: any) => {
      if(items){
         await items?.data?.children.forEach((res: any) => {
          
          if(res.data?.selftext_html){
             res.data.selftext_html = res.data?.selftext_html.replace (/&lt;!-- SC_OFF --&gt;/g, '');
             res.data.selftext_html = res.data?.selftext_html.replace (/&lt;!-- SC_ON --&gt;/g, '');
             res.data.selftext_html = this.htmlDecode(res.data?.selftext_html)
          }
         
        });
        this.listData = items;
        console.log(this.listData);
      }
    
    }, (error: any) => {
      alert('somethiung went wrong');
    })
  }catch(err){
    console.log(err)
  }
  
}
 htmlDecode(input:any) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

}
