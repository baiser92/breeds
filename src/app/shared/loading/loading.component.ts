import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

 showLoader: boolean;

    constructor(private loaderService: LoaderService) {}
	ngOnInit() {

        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
    }

}
