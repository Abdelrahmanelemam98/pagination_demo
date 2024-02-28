import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  data: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataList(); // Corrected method call
  }

  ngOnDestroy(): void {
    // Implement if needed for cleanup
  }

  dataList() {
    this.data = [
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },

      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },

      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
      {
        id: 1,
        title: 'anythink',
      },
    ];
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.dataList();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.dataList();
  }
}
