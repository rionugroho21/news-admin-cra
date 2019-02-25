import React from 'react';

function Item() {
    return <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <strong>Normal</strong> Form
                </div>
                <div class="card-body card-block">
                    <form action="" method="post" class="">
                        <div class="form-group">
                            <label for="nf-email" class=" form-control-label">Email</label>
                            <input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." class="form-control" />
                            <span class="help-block">Please enter your email</span>
                        </div>
                        <div class="form-group">
                            <label for="nf-password" class=" form-control-label">Password</label>
                            <input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." class="form-control" />
                            <span class="help-block">Please enter your password</span>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary btn-sm">
                        <i class="fa fa-dot-circle-o"></i> Edit
                    </button>
                    <button type="reset" class="btn btn-danger btn-sm">
                        <i class="fa fa-ban"></i> Delete
                    </button>
                </div>
            </div>
        </div>
}

export default Item;