﻿declare module server {
    interface BaseEntityTable {
        edit_type?: number;
        check_del?: boolean;
        expland_sub?: boolean;
    }
    interface i_Code {
        code: string;
        langCode: string;
        value: string;
    }
    interface CUYUnit {
        sign: string;
        code: string;
    }
    interface i_Lang extends BaseEntityTable {
        lang: string;
        area: string;
        memo: string;
        isuse: boolean;
        sort: any;
    }
    interface loginField {
        lang: string;
        account: string;
        password: string;
        img_vildate: string;
        rememberme: boolean;

    }
    interface AspNetRoles extends BaseEntityTable {
        Id: string;
        name: string;
        aspNetUsers: any[];
    }
    interface AspNetUsers extends BaseEntityTable {
        Id: string;
        email: string;
        emailConfirmed: boolean;
        passwordHash: string;
        securityStamp: string;
        phoneNumber: string;
        phoneNumberConfirmed: boolean;
        twoFactorEnabled: boolean;
        lockoutEndDateUtc: Date;
        lockoutEnabled: boolean;
        accessFailedCount: number;
        userName: string;
        department_id: number;
        aspNetRoles: server.AspNetRoles[];
        role_array: any;
    }

    interface Product extends BaseEntityTable {
        product_id?: number;
        category_id: number;
        product_name?: string;
        product_content?: string;
        price?: number;
        sort?: number;
        i_Hide?: boolean;
        productCategory?: server.ProductCategory;
    }
    interface ProductCategory extends BaseEntityTable {
        product_category_id?: number;
        category_name?: string;
        sort?: number;
        memo?: string;
        i_Hide?: boolean;
        product?: server.Product[];
    }

    interface Issue extends BaseEntityTable {
        issue_id?: number;
        issue_category_id?: number;
        issue_title?: string;
        issue_content?: string;
        issue_date?: Date;
        issue_ans?: string;
        i_Hide?: boolean;
        issueCategory?: server.IssueCategory;
    }
    interface IssueCategory extends BaseEntityTable {
        issue_category_id?: number;
        category_name?: string;
        sort?: number;
        memo?: string;
        i_Hide?: boolean;
        issue?: server.Issue[];
    }
    interface Sales extends BaseEntityTable {
        sales_id?: number;
        sales_no?: string;
        sales_name?: string;
        account?: string;
        psaaword?: string;
        address?: string;
        gender?: boolean;
        rank?: number;
        recommend_id?: number;
        recommend_name?: string; //only client
        share_id?: number;
        share_sort?: number;
        join_date?: Date;
        sales_state?: number;
        birthday?: Date;
    }
    interface Purchase extends BaseEntityTable {
        purchase_id?: number;
        purchase_no?: string;
        set_date?: Date;
        sales_id?: number;
        sales_name?: string;
        total?: number;
        state?: number;
    }
    interface PurchaseDetail extends BaseEntityTable {
        purchase_detail_id?: number;
        purchase_id?: number;
        item_no?: number;
        product_name?: string;
        qty?: number;
        price?: number;
        sub_total?: number;
        product_no?: string;
        purchase_no?: string
    }


} 